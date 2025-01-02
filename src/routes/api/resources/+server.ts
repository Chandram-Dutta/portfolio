import data from '../../../../static/data/resources.json';
import { json } from '@sveltejs/kit';

export async function GET() {
    return json(data);
}
