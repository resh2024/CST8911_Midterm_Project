module.exports = async function (context, req) {
  context.log("Fetching all documents from Cosmos DB");

  try {
    const allDocuments = context.bindings.documents;

    const simplifiedData = allDocuments.map((doc) => ({
      id: doc.id,
      products: doc.products,
    }));

    context.res = {
      status: 200,
      body: simplifiedData,
    };
  } catch (error) {
    context.log.error("Error fetching documents:", error);

    context.res = {
      status: 500,
      body: {
        error: "Failed to fetch documents",
        message: error.message,
      },
    };
  }
};
