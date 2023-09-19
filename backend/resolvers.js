// resolvers.js
const db = require('./database');

const resolvers = {

  getJobs: async () => {
    const jobs = await db.any('SELECT * FROM jobs ORDER BY id DESC');
    return jobs;
  },

  createJob: async ({ title, details, tags, company_id }) => {
    const job = await db.one(
      'INSERT INTO jobs(title, details, tags, company_id) VALUES($1, $2, $3, $4) RETURNING *',
      [title, details, tags, company_id]
    );
    return job;
  },

  getJobApplications: async ({ id }) => {
    const user = await db.any('SELECT * FROM applications WHERE job_id = $1 ', [id]);
    return user;
  },

  createJobApplication: async ({ rate, proposal, job_id, developer_id }) => {
    const user = await db.one(
      'INSERT INTO applications(rate, proposal, job_id, developer_id) VALUES($1, $2, $3, $4) RETURNING *',
      [rate, proposal, job_id, developer_id]
    );
    return user;
  },

  getCompanies: async () => {
    const companies = await db.any('SELECT * FROM companies ORDER BY id DESC');
    return companies;
  },

  createCompany: async ({ name, email }) => {
    const company = await db.one(
      'INSERT INTO companies(name, email) VALUES($1, $2) RETURNING *',
      [name, email]
    );
    return company;
  },

  getDevelopers: async () => {
    const developers = await db.any('SELECT * FROM developers ORDER BY id DESC');
    return developers;
  },

  createDeveloper: async ({ name, email, resume, tags }) => {
    const developer = await db.one(
      'INSERT INTO developers(name, email, resume, tags) VALUES($1, $2, $3, $4) RETURNING *',
      [name, email, resume, tags]
    );
    return developer;
  }

};

module.exports = resolvers;
