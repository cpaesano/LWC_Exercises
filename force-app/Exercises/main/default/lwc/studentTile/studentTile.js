import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api student = {
        Name: 'Carlos Paesano',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    };
    // @api isSelected = false;

    get tileSelected() {
        return (this.selectedStudentId===this.student.Id) ?
        "tile selected" : "tile";
        }
        
    studentClick(){
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: { studentId: this.student.Id }
        });
        this.dispatchEvent(evt) ;
        }

        @api selectedStudentId = '';
}

