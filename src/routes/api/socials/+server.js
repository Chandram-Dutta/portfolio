import data from '../../../../static/data/socials.json';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(data);
}
