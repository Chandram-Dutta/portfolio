import Bun from 'bun';
import { json } from '@sveltejs/kit';

export async function GET() {
	const filePath = 'static/data/socials.json';
	const file = Bun.file(filePath);

	return json(await file.json());
}
