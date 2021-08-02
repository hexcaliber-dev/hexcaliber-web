const REDIRECTS = [
  {
    old: "/drive",
    new: "https://drive.google.com/drive/u/0/folders/1Jpscfhg0XDrXZgClblQkPHSeOZRkNoTy",
  },
  {
    old: "/bulletsanctum",
    new: "https://64bitpandas.itch.io/bullet-sanctum",
  },
  {
    old: "/eggmageddon",
    new: "https://epicrider.itch.io/eggmageddon",
  },
  {
    old: "/bulletheaven",
    new: "https://epicrider.itch.io/bullet-heaven",
  },
  {
    old: "/convergence",
    new: "https://xkindredkinesis.itch.io/convergence",
  },
  {
    old: "/irtp",
    new: "https://64bitpandas.itch.io/its-rude-to-point",
  },
];

// Map to createRedirect (no need to modify anything below if creating new redirects)
exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions

  REDIRECTS.map((link) => {
    createRedirect({ fromPath: link.old, toPath: link.new, isPermanent: true });
  });
};
