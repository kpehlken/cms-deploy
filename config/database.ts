export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 1337),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'kp'),
      password: env('DATABASE_PASSWORD', 'kp'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
