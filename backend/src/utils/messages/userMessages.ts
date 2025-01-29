const USER = {
    ERR: {
        MISSING_FIELDS: "All fields are required (username, email, password)",
        INVALID_USERNAME: "Please enter a username with a valid format.",
        INVALID_EMAIL: "Please enter an email with a valid format.",
        WEAK_PASSWORD:  `Weak Password!
        Password must contain the following requirements:
        Contains at least one capital letter.
        Contains at least one number.
        Contains at least one special character.
        It is at least 6 characters long.`,
        NOT_UNIQUE_USERNAME: "The entered username is already in use.",
        NOT_UNIQUE_EMAIL: "The email entered is already in use",
        USER_NOT_FOUND: "User not found. Please check your credentials and try again.",
        MISSING_EMAIL_CONFIRM_TOKEN: `A token is required to confirm your email. Please use the link sent to your email, which looks like this: "https:ourdomain/token"`,
        INVALID_CONFIRMATION_TOKEN: `The provided token is invalid or does not correspond to any registered user.
        A token is required to confirm your email. Please use the link sent to your email, which looks like this:
        "https:ourdomain/token".`,
        ALREADY_VERIFIED: 'It seems that your email has already been confirmed. If you have any questions or need further assistance, please feel free to reach out to our support team.',
        MISSING_USERNAME_EMAIL: "Email or Username is required",
        MISSING_PASSWORD: "Password is required",
        INVALID_LOGIN_CREDENTIALS: "Invalid email/username or password",
        EMAIL_CONFIRMATION_REQUIRED: "Your email address has not been confirmed yet. Please confirm your email before attempting to log in. Check your inbox for the confirmation email, or request a new one if necessary.",
        ACCOUNT_NOT_ACTIVE: "Your account is currently inactive. To resolve this issue, please contact our support team for assistance. We’re here to help!"
    },
    SUCCESS: {
        EMAIL_CONFIRMATION: 'Email confirmation completed successfully! You can now access your account.',
        CONFIRM_EMAIL_SENT: `Your account has been created successfully. To activate your account, please check your email and click on the confirmation link we just sent.
            If you don't find the email in your inbox, check your spam or junk folder.`,
    }
}

export default USER;