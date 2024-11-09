import data from "../../../../static/data/work.json";
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(data);
}
