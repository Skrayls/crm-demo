const tasks = [];

export async function onRequestPost(event) {
  const body = await event.request.json();
  const id = Date.now();
  const task = { id, ...body };
  tasks.push(task);
  return new Response(JSON.stringify(task), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequestGet(event) {
  return new Response(JSON.stringify(tasks), {
    headers: { "Content-Type": "application/json" }
  });
}
