import { Router, json, urlencoded } from "express";

export default () =>
  Router()
    .get("/login", (req, res) => {
      res.send(`<html>
    <body>
    <form action="/login" method="post">
    <input type="hidden" name="response_url" value="${req.query.response_url}" />
    <button type="submit" style="font-size:14pt">Link this service to Google</button>
    </form>
    </body>
    </html>
    `);
    })
    .post(
      "/login",
      urlencoded({
        extended: true,
      }),
      async (req, res) => {
        console.debug("/login", req.query);
        // Here, you should validate the user account.
        // In this sample, we do not do that.
        const responseUrl = decodeURIComponent(req.body.response_url as string);
        console.debug("redirect:", responseUrl);
        return res.redirect(responseUrl);
      },
    )
    .get("/fakeauth", async (req, res) => {
      console.debug("/fakeauth", req.query);
      const responseUrl = `${decodeURIComponent(req.query.redirect_uri as string)}?code=${"xxxxxx"}&state=${req.query.state}`;
      const redirectUrl = `/login?response_url=${encodeURIComponent(responseUrl)}`;
      console.debug("redirect:", redirectUrl);
      return res.redirect(redirectUrl);
    })
    .all(
      "/faketoken",
      urlencoded({
        extended: true,
      }),
      async (req, res) => {
        console.debug("/faketoken", req.query);
        console.debug(req.body);
        const grantType = req.query.grant_type
          ? req.query.grant_type
          : req.body.grant_type;
        const secondsInDay = 86400; // 60 * 60 * 24
        const HTTP_STATUS_OK = 200;
        let token;
        if (grantType === "authorization_code") {
          token = {
            token_type: "bearer",
            access_token: "123access",
            refresh_token: "123refresh",
            expires_in: secondsInDay,
          };
        } else if (grantType === "refresh_token") {
          token = {
            token_type: "bearer",
            access_token: "123access",
            expires_in: secondsInDay,
          };
        }
        console.debug("token:", token);
        res.status(HTTP_STATUS_OK).json(token);
      },
    );
