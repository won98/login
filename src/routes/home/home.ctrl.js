const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["szzang98", "greenboy"],
  psword: [123, 345],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.includes(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    } else {
      return res.json({
        success: false,
        msg: "실패",
      });
    }
  },
};

module.exports = {
  output,
  process,
};
