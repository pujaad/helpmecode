// schema.js
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Developer {
    id: ID!
    name: String!
    email: String!
    resume: String!
    tags: String!
  }

  type Company {
    id: ID!
    name: String!
    email: String!
  }

  type Job {
    id: ID!
    title: String!
    details: String!
    tags: String!
    company_id: Int!
  }

  type Application {
    id: ID!
    rate: Int!
    proposal: String!
    job_id: Int!
    developer_id: Int!
  }

  type Query {
    getJobs: [Job]
    getJobApplications(id: Int!): [Application]
    getCompanies: [Company]
    getDevelopers: [Developer]
  }

  type Mutation {
    createJob(title: String!, details: String!, tags: String!, company_id: Int!): Job
    createJobApplication(rate: Int!, proposal: String!, job_id: Int!, developer_id: Int!): Application
    createCompany(name: String!, email: String!): Company
    createDeveloper(name: String!, email: String!, resume: String!, tags: String!): Developer
  }
`);

module.exports = schema;
