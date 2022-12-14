import models from "./model";

const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
    models.users.sync({ alter: isDev})
    models.sickness.sync({ alter: isDev})
    models.medicines.sync({ alter: isDev })
    models.sicknessMedicine.sync({ alter: isDev })
}

export default dbInit;