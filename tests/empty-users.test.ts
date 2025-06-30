
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
import {id_ID} from "@faker-js/faker";
let baseURL: string = 'http://localhost:3000/users';

test.describe('No users tests', () => {
    test.beforeEach(async ({ request }) => {
        const res = await request.get(`${baseURL}`);
        const responseBody = await res.text()
        expect(responseBody).toBe('[]');
    });
    test('GET should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(StatusCodes.OK);
        const responseBody = await response.text()
        expect(response.status).toBeTruthy();
    });
})
