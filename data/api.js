import homes from "./homes.json";
import favourite from "./favourite.json";

export default function handler(req, res) {
  // 🔒 Read-only API
  if (req.method !== "GET") {
    return res.status(403).json({ error: "Read only API" });
  }

  const { url } = req;

  if (url === "/api/homes") {
    return res.status(200).json(homes);
  }

  if (url === "/api/favourite") {
    return res.status(200).json(favourite);
  }

  return res.status(404).json({ error: "Not found" });
}
