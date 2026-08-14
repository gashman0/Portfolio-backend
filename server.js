import "dotenv/config";

const { default: app } = await import("./src/app.js");
const { default: connectDatabase } = await import(
  "./src/config/database.js"
);

const PORT = process.env.PORT || 8081;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Allowed frontend: ${process.env.FRONTEND_URI}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();