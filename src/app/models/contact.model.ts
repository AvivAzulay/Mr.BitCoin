import { UtilsService } from "../services/utils.service";
const utilService = new UtilsService()

export class Contact {

    constructor(
        public _id: string = '',
        public name: string = '',
        public email: string = '',
        public phone: string = '',
    ) { }

    setId?() {
        this._id = utilService.makeId()
    }
}

// {
//     "_id": "5a56640269f443a5d64b32ca",
//     "name": "Ochoa Hyde",
//     "email": "ochoahyde@renovize.com",
//     "phone": "+1 (968) 593-3824"
// }