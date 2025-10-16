module.exports = async function (context, req) {
  context.log("POST function triggered");

  try {
    // Validate request body
    if (!req.body) {
      context.res = {
        status: 400,
        body: {
          error: "Request body is required",
        },
      };
      return;
    }

    // Validate required fields
    if (!req.body.products) {
      context.res = {
        status: 400,
        body: {
          error: "products field is required",
        },
      };
      return;
    }

    // Create new document
    const newDocument = {
      id: req.body.id || new Date().getTime().toString(),
      products: req.body.products,
    };

    // Save to Cosmos DB
    context.bindings.outputDocument = newDocument;

    // Return success response
    context.res = {
      status: 201,
      body: {
        message: "Item created successfully",
        createdItem: {
          id: newDocument.id,
          products: newDocument.products,
        },
      },
    };
  } catch (error) {
    context.log.error("Error creating item:", error);

    context.res = {
      status: 500,
      body: {
        error: "Failed to create item",
        message: error.message,
      },
    };
  }
};
