export default function Id(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(req.query.id);
}
