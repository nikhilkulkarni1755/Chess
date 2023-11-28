import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  piece: string = ''

  // K King 
  // Q Queen
  // B Bishop
  // H Knight/Horse
  // R Rook
  // P Pawn


  board = [
    {id: 1, name: 'A8', color: 'white', isOccupied: true, piece: 'R'},
    {id: 2, name: 'B8', color: 'black', isOccupied: true, piece: 'H'},
    {id: 3, name: 'C8', color: 'white', isOccupied: true, piece: 'B'},
    {id: 4, name: 'D8', color: 'black', isOccupied: true, piece: ''},
    {id: 5, name: 'E8', color: 'white', isOccupied: true, piece: ''},
    {id: 6, name: 'F8', color: 'black', isOccupied: true, piece: 'B'},
    {id: 7, name: 'G8', color: 'white', isOccupied: true, piece: 'H'},
    {id: 8, name: 'H8', color: 'black', isOccupied: true, piece: 'R'},

    {id: 9, name: 'A7', color: 'black', isOccupied: true, piece: ''},
    {id: 10, name: 'B7', color: 'white', isOccupied: true, piece: ''},
    {id: 11, name: 'C7', color: 'black', isOccupied: true, piece: ''},
    {id: 12, name: 'D7', color: 'white', isOccupied: true, piece: ''},
    {id: 13, name: 'E7', color: 'black', isOccupied: true, piece: ''},
    {id: 14, name: 'F7', color: 'white', isOccupied: true, piece: ''},
    {id: 15, name: 'G7', color: 'black', isOccupied: true, piece: ''},
    {id: 16, name: 'H7', color: 'white', isOccupied: true, piece: ''},
    
    {id: 17, name: 'A6', color: 'white', isOccupied: false, piece: ''},
    {id: 18, name: 'B6', color: 'black', isOccupied: false, piece: ''},
    {id: 19, name: 'C6', color: 'white', isOccupied: false, piece: ''},
    {id: 20, name: 'D6', color: 'black', isOccupied: false, piece: ''},
    {id: 21, name: 'E6', color: 'white', isOccupied: false, piece: ''},
    {id: 22, name: 'F6', color: 'black', isOccupied: false, piece: ''},
    {id: 23, name: 'G6', color: 'white', isOccupied: false, piece: ''},
    {id: 24, name: 'H6', color: 'black', isOccupied: false, piece: ''},

    {id: 25, name: 'A5', color: 'black', isOccupied: false, piece: ''},
    {id: 26, name: 'B5', color: 'white', isOccupied: false, piece: ''},
    {id: 27, name: 'C5', color: 'black', isOccupied: false, piece: ''},
    {id: 28, name: 'D5', color: 'white', isOccupied: false, piece: ''},
    {id: 29, name: 'E5', color: 'black', isOccupied: false, piece: ''},
    {id: 30, name: 'F5', color: 'white', isOccupied: false, piece: ''},
    {id: 31, name: 'G5', color: 'black', isOccupied: false, piece: ''},
    {id: 32, name: 'H5', color: 'white', isOccupied: false, piece: ''},

    {id: 33, name: 'A4', color: 'white', isOccupied: false, piece: ''},
    {id: 34, name: 'B4', color: 'black', isOccupied: false, piece: ''},
    {id: 35, name: 'C4', color: 'white', isOccupied: false, piece: ''},
    {id: 36, name: 'D4', color: 'black', isOccupied: false, piece: ''},
    {id: 37, name: 'E4', color: 'white', isOccupied: false, piece: ''},
    {id: 38, name: 'F4', color: 'black', isOccupied: false, piece: ''},
    {id: 39, name: 'G4', color: 'white', isOccupied: false, piece: ''},
    {id: 40, name: 'H4', color: 'black', isOccupied: false, piece: ''},

    {id: 41, name: 'A3', color: 'black', isOccupied: false, piece: ''},
    {id: 42, name: 'B3', color: 'white', isOccupied: false, piece: ''},
    {id: 43, name: 'C3', color: 'black', isOccupied: false, piece: ''},
    {id: 44, name: 'D3', color: 'white', isOccupied: false, piece: ''},
    {id: 45, name: 'E3', color: 'black', isOccupied: false, piece: ''},
    {id: 46, name: 'F3', color: 'white', isOccupied: false, piece: ''},
    {id: 47, name: 'G3', color: 'black', isOccupied: false, piece: ''},
    {id: 48, name: 'H3', color: 'white', isOccupied: false, piece: ''},

    {id: 49, name: 'A2', color: 'white', isOccupied: true, piece: ''},
    {id: 50, name: 'B2', color: 'black', isOccupied: true, piece: ''},
    {id: 51, name: 'C2', color: 'white', isOccupied: true, piece: ''},
    {id: 52, name: 'D2', color: 'black', isOccupied: true, piece: ''},
    {id: 53, name: 'E2', color: 'white', isOccupied: true, piece: ''},
    {id: 54, name: 'F2', color: 'black', isOccupied: true, piece: ''},
    {id: 55, name: 'G2', color: 'white', isOccupied: true, piece: ''},
    {id: 56, name: 'H2', color: 'black', isOccupied: true, piece: ''},

    {id: 57, name: 'A1', color: 'black', isOccupied: true, piece: ''},
    {id: 58, name: 'B1', color: 'white', isOccupied: true, piece: ''},
    {id: 59, name: 'C1', color: 'black', isOccupied: true, piece: ''},
    {id: 60, name: 'D1', color: 'white', isOccupied: true, piece: ''},
    {id: 61, name: 'E1', color: 'black', isOccupied: true, piece: ''},
    {id: 62, name: 'F1', color: 'white', isOccupied: true, piece: ''},
    {id: 63, name: 'G1', color: 'black', isOccupied: true, piece: ''},
    {id: 64, name: 'H1', color: 'white', isOccupied: true, piece: ''},
  ]

  onItemClick(item: any) {
    console.log('item clicked: ' + item.name)
    this.piece = 'item clicked: ' + item.name
  }
}
