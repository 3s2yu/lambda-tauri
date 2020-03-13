const personSchema = {
  version: 0,
  title: 'person schema',
  description: 'describes a simple person',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    birthDate: {
      type: 'string',
    },
    deathDate: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    active: {
      type: 'boolean',
    }
  },
  required: ['birthDate'],
  attachments: {
    encrypted: true
  }
};

export default personSchema;
