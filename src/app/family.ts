export class Family {
    constructor (
        public name: string,
        public answered: boolean,
        public passcode: string,
        public members: Member[]
    ) { }
}

export class Member {
    constructor (
        public name: string,
        public attending: boolean
    ) { }
}
    
