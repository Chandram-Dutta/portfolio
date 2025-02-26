import data from '../../../../static/data/projects.json';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(data);
}
