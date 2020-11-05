import bcrypt from 'bcryptjs';

const hashPassword = (plaintextPassword) => {
    if(plaintextPassword.length < 8) {
        throw new Error('Password must be 8 characters or longer.');
    }

    return bcrypt.hash(plaintextPassword, 10);
}

export { hashPassword as default };