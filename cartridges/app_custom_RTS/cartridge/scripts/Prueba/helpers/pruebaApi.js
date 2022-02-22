const pruebaRestService = require("*/cartridge/scripts/Prueba/service/pruebaRestService");

const getUsers = function () {
  try {
    // return pruebaRestService.call();
    var prueba = pruebaRestService.call({
      path: "users?page=1&per_page=10",
      method: "GET",
      body: {},
    });

    if (prueba) {
      return prueba;
    }
  } catch (error) {
    return {
      error: true,
      message: "something went wrong",
      errorMessage: error,
    };
  }
};

const createUser = function (user) {
  try {
    // return pruebaRestService.call();
    var prueba = pruebaRestService.call({
      path: "users",
      method: "POST",
      body: user,
    });

    if (prueba) {
      return prueba;
    }
  } catch (error) {
    return {
      error: true,
      message: "something went wrong",
      errorMessage: error,
    };
  }
};

const updateUser = function (user) {
  try {
    // return pruebaRestService.call();
    var prueba = pruebaRestService.call({
      path: "users/" + user.id,
      method: "PUT",
      body: user,
    });

    if (prueba) {
      return prueba;
    }
  } catch (error) {
    return {
      error: true,
      message: "something went wrong",
      errorMessage: error,
    };
  }
};

const deleteUser = function (user) {
  try {
    // return pruebaRestService.call();
    var prueba = pruebaRestService.call({
      path: "users/" + user.id,
      method: "DELETE",
      body: {},
    });

    if (prueba) {
      return prueba;
    }
  } catch (error) {
    return {
      error: true,
      message: "something went wrong",
      errorMessage: error,
    };
  }
};

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
