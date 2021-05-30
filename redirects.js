const REDIRECTS = [
  {
    old: "/drive",
    new: "https://drive.google.com/drive/u/0/folders/1Jpscfhg0XDrXZgClblQkPHSeOZRkNoTy",
  },
];

// Map to createRedirect (no need to modify anything below if creating new redirects)
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions

  REDIRECTS.map((link) => {
    createRedirect({ fromPath: link.old, toPath: link.new, isPermanent: true });
  });
};
