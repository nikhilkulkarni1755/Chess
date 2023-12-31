import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  piece: string = ''
  possibilities:string = ''

  // K King 
  // Q Queen
  // B Bishop
  // H Knight/Horse
  // R Rook
  // P Pawn
  pieces = [
    // new Bishop()
  ]

  board = [
    {id: 1, name: 'A8', color: 'White', isOccupied: true, piece: 'WhiteRook'},
    {id: 2, name: 'B8', color: 'Grey', isOccupied: true, piece: 'WhiteKnight'},
    {id: 3, name: 'C8', color: 'White', isOccupied: true, piece: 'WhiteBishop'},
    {id: 4, name: 'D8', color: 'Grey', isOccupied: true, piece: 'WhiteKing'},
    {id: 5, name: 'E8', color: 'White', isOccupied: true, piece: 'WhiteQueen'},
    {id: 6, name: 'F8', color: 'Grey', isOccupied: true, piece: 'WhiteBishop'},
    {id: 7, name: 'G8', color: 'White', isOccupied: true, piece: 'WhiteKnight'},
    {id: 8, name: 'H8', color: 'Grey', isOccupied: true, piece: 'WhiteRook'},

    {id: 9, name: 'A7', color: 'Grey', isOccupied: true, piece: 'WhitePawn'},
    {id: 10, name: 'B7', color: 'White', isOccupied: true, piece: 'WhitePawn'},
    {id: 11, name: 'C7', color: 'Grey', isOccupied: true, piece: 'WhitePawn'},
    {id: 12, name: 'D7', color: 'White', isOccupied: true, piece: 'WhitePawn'},
    {id: 13, name: 'E7', color: 'Grey', isOccupied: true, piece: 'WhitePawn'},
    {id: 14, name: 'F7', color: 'White', isOccupied: true, piece: 'WhitePawn'},
    {id: 15, name: 'G7', color: 'Grey', isOccupied: true, piece: 'WhitePawn'},
    {id: 16, name: 'H7', color: 'White', isOccupied: true, piece: 'WhitePawn'},
    
    {id: 17, name: 'A6', color: 'White', isOccupied: false, piece: ''},
    {id: 18, name: 'B6', color: 'Grey', isOccupied: false, piece: ''},
    {id: 19, name: 'C6', color: 'White', isOccupied: false, piece: ''},
    {id: 20, name: 'D6', color: 'Grey', isOccupied: false, piece: ''},
    {id: 21, name: 'E6', color: 'White', isOccupied: false, piece: ''},
    {id: 22, name: 'F6', color: 'Grey', isOccupied: false, piece: ''},
    {id: 23, name: 'G6', color: 'White', isOccupied: false, piece: ''},
    {id: 24, name: 'H6', color: 'Grey', isOccupied: false, piece: ''},

    {id: 25, name: 'A5', color: 'Grey', isOccupied: false, piece: ''},
    {id: 26, name: 'B5', color: 'White', isOccupied: false, piece: ''},
    {id: 27, name: 'C5', color: 'Grey', isOccupied: false, piece: ''},
    {id: 28, name: 'D5', color: 'White', isOccupied: false, piece: ''},
    {id: 29, name: 'E5', color: 'Grey', isOccupied: false, piece: ''},
    {id: 30, name: 'F5', color: 'White', isOccupied: false, piece: ''},
    {id: 31, name: 'G5', color: 'Grey', isOccupied: false, piece: ''},
    {id: 32, name: 'H5', color: 'White', isOccupied: false, piece: ''},

    {id: 33, name: 'A4', color: 'White', isOccupied: false, piece: ''},
    {id: 34, name: 'B4', color: 'Grey', isOccupied: false, piece: ''},
    {id: 35, name: 'C4', color: 'White', isOccupied: false, piece: ''},
    {id: 36, name: 'D4', color: 'Grey', isOccupied: false, piece: ''},
    {id: 37, name: 'E4', color: 'White', isOccupied: false, piece: ''},
    {id: 38, name: 'F4', color: 'Grey', isOccupied: false, piece: ''},
    {id: 39, name: 'G4', color: 'White', isOccupied: false, piece: ''},
    {id: 40, name: 'H4', color: 'Grey', isOccupied: false, piece: ''},

    {id: 41, name: 'A3', color: 'Grey', isOccupied: false, piece: ''},
    {id: 42, name: 'B3', color: 'White', isOccupied: false, piece: ''},
    {id: 43, name: 'C3', color: 'Grey', isOccupied: false, piece: ''},
    {id: 44, name: 'D3', color: 'White', isOccupied: false, piece: ''},
    {id: 45, name: 'E3', color: 'Grey', isOccupied: false, piece: ''},
    {id: 46, name: 'F3', color: 'White', isOccupied: false, piece: ''},
    {id: 47, name: 'G3', color: 'Grey', isOccupied: false, piece: ''},
    {id: 48, name: 'H3', color: 'White', isOccupied: false, piece: ''},

    {id: 49, name: 'A2', color: 'White', isOccupied: true, piece: 'BlackPawn'},
    {id: 50, name: 'B2', color: 'Grey', isOccupied: true, piece: 'BlackPawn'},
    {id: 51, name: 'C2', color: 'White', isOccupied: true, piece: 'BlackPawn'},
    {id: 52, name: 'D2', color: 'Grey', isOccupied: true, piece: 'BlackPawn'},
    {id: 53, name: 'E2', color: 'White', isOccupied: true, piece: 'BlackPawn'},
    {id: 54, name: 'F2', color: 'Grey', isOccupied: true, piece: 'BlackPawn'},
    {id: 55, name: 'G2', color: 'White', isOccupied: true, piece: 'BlackPawn'},
    {id: 56, name: 'H2', color: 'Grey', isOccupied: true, piece: 'BlackPawn'},

    {id: 57, name: 'A1', color: 'Grey', isOccupied: true, piece: 'BlackRook'},
    {id: 58, name: 'B1', color: 'White', isOccupied: true, piece: 'BlackKnight'},
    {id: 59, name: 'C1', color: 'Grey', isOccupied: true, piece: 'BlackBishop'},
    {id: 60, name: 'D1', color: 'White', isOccupied: true, piece: 'BlackKing'},
    {id: 61, name: 'E1', color: 'Grey', isOccupied: true, piece: 'BlackQueen'},
    {id: 62, name: 'F1', color: 'White', isOccupied: true, piece: 'BlackBishop'},
    {id: 63, name: 'G1', color: 'Grey', isOccupied: true, piece: 'BlackKnight'},
    {id: 64, name: 'H1', color: 'White', isOccupied: true, piece: 'BlackRook'},
  ]

  constructor() {
    this.board.forEach((boardElement) => {
      if(boardElement.piece == '') {
        boardElement.piece = boardElement.color + 'Tile'
      }
    })
  }

  // we need getters and setters for the board

  setPiece() {
    console.log('inside setPiece')
    let temp = this.board.find(x => x.name == 'D1')
    // this.board.piece = 'BlackQueen'
    // location.reload() // does this actually work
  }

  getPiece() {
    return this.board.find(x => x.name == 'D1');
  }

  onItemClick(item: any) {
    console.log('item clicked: ' + item.name)
    this.piece = item.name
    // this.showPiecePossibilities(item.piece)

    this.movePiece(item.piece, item)
    // this.setPiece()
  }

  movePiece(piece:string, item:any) {
    //item has board element
    //parse item name 'D3' to D5
    console.log(item.name[0])
    console.log(item.name[1])
    this.possibilities = ''

    //we can detect what piece is on the board. 
    if(piece == 'WhitePawn') {
      console.log('White Pawn')
      this.possibilities = item.name[0] + (Number(item.name[1]) - 1) + " or " + item.name[0] + (Number(item.name[1]) - 2) 
    }
    if(piece == 'BlackPawn') {
      console.log('Black Pawn') 
      this.possibilities = item.name[0] + (Number(item.name[1]) + 1) + " or " + item.name[0] + (Number(item.name[1]) + 2) 
    }
    if(piece == 'BlackQueen') {
      console.log('Black Queen')
    }
    if(piece == 'WhiteQueen') {
      console.log('White Queen')
    }
    if(piece == 'BlackKing') {
      console.log('Black King')
    }
    if(piece == 'WhiteKing') {
      console.log('White King')
    }
    if(piece == 'BlackBishop') {
      console.log('Black Bishop')
    }
    if(piece == 'WhiteBishop') {
      console.log('White Bishop')
    }
  }

  // showPiecePossibilities(piece:any) {
  //   if(piece == 'WhitePawn') {
  //     console.log('clicked on a white pawn!')

  //     // opposite of black, F7 to F5
  //   }
  //   if(piece == 'BlackPawn') {
  //     console.log('clicked on a black pawn!')
  //     // can move 1 of 2 steps ahead, which means

  //     // F2 to F4


  //   }
  //   // console.log('This is where we show where the piece will go')
  // }
}
