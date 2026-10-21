import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';
import { title } from 'process';
import { Macska } from './macska.js';
import { Jatek } from './jatek.js';

const mysqlConnection = mysql.createPool({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'festmenyek',
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getMacskak() {
    const [results] = await mysqlConnection.execute(
      'SELECT * FROM `macskak`'
    )
    const rows = results as Macska[];
    return rows;
  }

  async getJatekok() {
    const [results] = await mysqlConnection.execute(
      'SELECT * FROM `jatekok`'
    )
    const rows = results as Jatek[];
    return rows;
  }

  async ujJatek(nev:string) {
    const [results] = await mysqlConnection.execute(
      'INSERT INTO jatekok (nev) VALUES (?)',
      [nev]
    )
      const rows = results as any;
      return {
        id: rows.insertId,
        nev
      } as Jatek;
  }
}


