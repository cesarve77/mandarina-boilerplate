export const LoginRequiredPolicy = async (user) => {
	if (!user) {
		throw new Error('You must be logged in to access this resource');
	}
}

export const AdminRequiredPolicy = async (user, context, info) => {
	if (!user.roles.includes('admin')) {
		// Implementing abstract default condition for filtering information
		// let query = args.where || {}
		// args.where = {AND: [query, restrictionQuery]}
	}
};
