const getRecipientEmail = (users, userLoggedIn) => users?.filter(userEmail => userEmail !== userLoggedIn?.email)[0];

export default getRecipientEmail;