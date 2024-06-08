import data from '../../../../static/data/publications.json';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(data);
}
