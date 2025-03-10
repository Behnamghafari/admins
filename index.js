function countunreadOrder() {
  fetch(
    localStorage.url +
      "\u002f\u0075\u006e\u0072\u0065\u0061\u0064\u006f\u0072\u0064\u0065\u0072\u0063\u006f\u0075\u006e\u0074",
    {
      headers: {
        "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":
          "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
        Authorization: localStorage.getItem("\u0074\u006f\u006b\u0065\u006e"),
      },
    }
  )
    .then((e) => e.json())
    .then((e) => {
      document
        .querySelector(
          "\u0023\u0062\u0061\u0073\u006b\u0065\u0074\u0063\u006f\u0075\u006e\u0074"
        )
        .insertAdjacentHTML(
          "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
          `\n        <span class="badge  badge-pill" style="position: absolute;top: 2px;right: 2px;">${e.data}</span>\n        `
        );
    })
    .catch((e) => console.log(e));
}
function countunreadmessage() {
  fetch(
    localStorage.url +
      "\u002f\u0075\u006e\u0072\u0065\u0061\u0064\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u0063\u006f\u0075\u006e\u0074",
    {
      headers: {
        "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":
          "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
        Authorization: localStorage.getItem("\u0074\u006f\u006b\u0065\u006e"),
      },
    }
  )
    .then((e) => e.json())
    .then((e) => {
      console.log(
        "\u0064\u0061\u0074\u0061\u002e\u0064\u0061\u0074\u0061\u0020\u003a",
        e
      ),
        document
          .querySelector(
            "\u0023\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0063\u006f\u0075\u006e\u0074"
          )
          .insertAdjacentHTML(
            "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
            `\n    <span  class="badge  badge-pill" style="position: absolute;top: 2px;right: 2px;">${e.data}</span>\n    `
          );
    })
    .catch((e) => console.log(e));
}
if (
  (fetch(
    localStorage.url +
      "\u002f\u0061\u006c\u006c\u0070\u0069\u0063\u0070\u0061\u0079\u0073\u0068\u006f\u0077\u0063\u006f\u0075\u006e\u0074",
    {
      headers: {
        "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":
          "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
        Authorization: localStorage.getItem("\u0074\u006f\u006b\u0065\u006e"),
      },
    }
  )
    .then((e) => e.json())
    .then((e) => {
      const t = document.querySelector(
        "\u002e\u0066\u0061\u002d\u0062\u0065\u006c\u006c"
      ).parentNode;
      (t.style.position = "\u0072\u0065\u006c\u0061\u0074\u0069\u0076\u0065"),
        console.log("\u0064\u0061\u0064\u0020\u003a", t),
        t.insertAdjacentHTML(
          "\u0062\u0065\u0066\u006f\u0072\u0065\u0065\u006e\u0064",
          `\n<span  class="badge  badge-pill" style="position: absolute;top: 2px;right: 2px;">${e.data}</span>\n`
        ),
        t.addEventListener("\u0063\u006c\u0069\u0063\u006b", (e) => {
          e.preventDefault(),
            location.assign(
              "\u002e\u002f\u0073\u0068\u006f\u0077\u0070\u0069\u0063\u0070\u0061\u0079\u002e\u0068\u0074\u006d\u006c"
            );
        });
    })
    .catch((e) => console.log(e)),
  countunreadmessage(),
  countunreadOrder(),
  setTimeout(() => {
    countunreadmessage(), countunreadOrder();
  }, 12e4),
  localStorage.message ||
    fetch(
      localStorage.url +
        "\u002f\u0075\u006e\u0072\u0065\u0061\u0064\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
      {
        headers: {
          "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":
            "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
          Authorization: localStorage.getItem("\u0074\u006f\u006b\u0065\u006e"),
        },
      }
    )
      .then((e) => e.json())
      .then((e) => {
        console.log(
          "\u0064\u0061\u0074\u0061\u002e\u0064\u0061\u0074\u0061\u0020\u003a",
          e.data
        ),
          (localStorage.message = JSON.stringify(e.data));
      })
      .catch((e) => console.log(e)),
  commentcount.addEventListener("\u0063\u006c\u0069\u0063\u006b", (e) => {
    e.preventDefault(),
      fetch(
        localStorage.url +
          "\u002f\u0075\u006e\u0072\u0065\u0061\u0064\u006d\u0065\u0073\u0073\u0061\u0067\u0065",
        {
          headers: {
            "\u0063\u006f\u006e\u0074\u0065\u006e\u0074\u002d\u0054\u0079\u0070\u0065":
              "\u0061\u0070\u0070\u006c\u0069\u0063\u0061\u0074\u0069\u006f\u006e\u002f\u006a\u0073\u006f\u006e",
            Authorization: localStorage.getItem(
              "\u0074\u006f\u006b\u0065\u006e"
            ),
          },
        }
      )
        .then((e) => e.json())
        .then((e) => {
          console.log(
            "\u0064\u0061\u0074\u0061\u002e\u0064\u0061\u0074\u0061\u0020\u003a",
            e.data
          ),
            (localStorage.message = JSON.stringify(e.data)),
            location.assign(
              "\u002e\u002f\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002e\u0068\u0074\u006d\u006c"
            );
        })
        .catch((e) => console.log(e));
  }),
  document
    .querySelector(
      "\u0023\u0061\u0064\u006d\u0069\u006e\u006e\u0061\u006d\u0065"
    )
    .addEventListener("\u0063\u006c\u0069\u0063\u006b", (e) => {
      e.preventDefault(),
        location.assign(
          "\u002e\u002f\u0061\u0064\u006d\u0069\u006e\u0065\u0064\u0069\u0074\u002e\u0068\u0074\u006d\u006c"
        );
    }),
  location.href.endsWith(
    "\u006d\u0065\u0073\u0073\u0061\u0067\u0065\u002e\u0068\u0074\u006d\u006c"
  ))
) {
  const e = JSON.parse(localStorage.message);
  console.log(
    "\u0063\u006f\u006d\u006d\u0065\u006e\u0074\u0073\u0020\u003a",
    e
  );
}
