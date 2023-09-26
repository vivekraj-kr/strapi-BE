const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "db.usbzvuwuogixfwkujmdy.supabase.co"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "yj2AYkOdDB3GXRta"),
      ssl: env.bool("DATABASE_SSL", false)
    },
    useNullAsDefault: true
  }
});
