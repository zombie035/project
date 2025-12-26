import users from "./users.json";

export default function (req, res) {
  if (req.method !== "GET") {
    return res.status(403).json({ error: "Read only API" });
  }

  res.status(200).json(users);
}
