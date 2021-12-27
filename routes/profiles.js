const express = require("express");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require("express-validator");

const router = express.Router();

const userUpdateValidation = [
	check("editUsername")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a username")
		.isLength({ max: 50 })
		.withMessage("username must be shorter than 50 characters"),
	check("editFirstName")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a first name")
		.isLength({ max: 50 })
		.withMessage("first name must be shorter than 50 characters"),
	check("editLastName")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a last name")
		.isLength({ max: 50 })
		.withMessage("last name must be shorter than 50 characters"),
	check("editEmail")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a email")
		.isEmail()
		.withMessage("Please provide a valid email")
		.isLength({ max: 100 })
		.withMessage("email must be shorter than 100 characters"),
];

router.get(
	"/:id",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const userId = parseInt(req.params.id);
		const profileUser = await db.User.findOne({
			where: {
				id: userId,
			},
			include: [db.Comment, { model: db.Extension, include: db.Category }],
		});
		let extensionNames = profileUser.Extensions.map(
			(extension) => extension.name
		);

		let extensions = profileUser.Extensions
		let comments = profileUser.Comments

		res.render('profile-page', { title: "Profile Page", profileUser, req, extensions, comments, csrfToken: req.csrfToken(), authenticated: !!res?.locals.authenticated })
	})
);

router.get(
	"/:id/edit",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const userId = parseInt(req.params.id);
		const currentUserId = req.session.auth.userId;

		const profileUser = await db.User.findByPk(userId);

		if (userId === currentUserId) {
			res.render("profile-edit", {
				title: "Edit Profile",
				profileUser,
				csrfToken: req.csrfToken(),
			});
		} else {
			res.redirect(`/profiles/${userId}`);
		}
	})
);

router.post(
	"/:id/edit",
	csrfProtection,
	userUpdateValidation,
	asyncHandler(async (req, res) => {
		const userId = req.params.id;
		const profileUser = await db.User.findByPk(userId);
		const { editFirstName, editLastName, editUsername, editEmail, editBio, editAvatarURL } = req.body;

		const validatorErrors = validationResult(req);

		if (validatorErrors.isEmpty()) {
			const updatedUser = await profileUser.update({
				firstName: editFirstName,
				lastName: editLastName,
				username: editUsername,
				email: editEmail,
				bio: editBio,
				avatarURL: editAvatarURL,
			});

			res.redirect(`/profiles/${userId}`);
		} else {
			const errors = validatorErrors.array().map(error => error.msg);
			res.render('profile-edit', {
				errors,
				profileUser: {
					id: profileUser.id,
					username: editUsername || profileUser.username,
					firstName: editFirstName || profileUser.firstName,
					lastName: editLastName || profileUser.lastName,
					email: editEmail || profileUser.email,
					bio: editBio || profileUser.bio,
					avatarURL: editAvatarURL || profileUser.avatarURL
				},
				csrfToken: req.csrfToken()
			})
		}
	})
);

module.exports = router;
