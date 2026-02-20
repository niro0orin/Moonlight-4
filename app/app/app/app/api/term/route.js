export async function POST(req) {
  return Response.json({
    term: "Example",
    pronunciation_ar: "مثال",
    meaning_ar: "مثال",
    definition_ar: "هذا مجرد اختبار"
  });
}
