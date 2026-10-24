import assert from 'node:assert/strict';
import { createAiInput } from '@x12i/ai-input';

const inputs = await createAiInput({ envFile: false, loadDotenv: false, env: {} });
const payload = { task: 'review', items: [{ id: 1, status: 'ready' }, { id: 2, status: 'ready' }] };
const prepared = await inputs.prepare(payload);
const readable = await inputs.toReadable(prepared);
// The parser deliberately returns records with null prototypes. Compare JSON data.
assert.deepEqual(JSON.parse(JSON.stringify(inputs.parse(readable.text))), payload);
console.log(readable.text);
