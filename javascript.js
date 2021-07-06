const data = [
    {
        name: 'Dravid',
        age: 19,
        class: 14,
        subject: 'pcm',
        image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    {
        name: 'Kajal',
        age: 16,
        class: 14,
        subject: 'pcb',
        image: 'https://randomuser.me/api/portraits/women/64.jpg'
    },
    {
        name: 'Tanish',
        age: 14,
        class: 12,
        subject: 'pcm',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    {
        name: 'Vansh',
        age: 13,
        class: 11,
        subject: 'pcm',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
        name: 'Vanshika',
        age: 11,
        class: 9,
        subject: 'maths',
        image: 'https://randomuser.me/api/portraits/women/54.jpg'
    },
    {
        name: 'Sidharth Raj',
        age: 10,
        class: 2,
        subject: 'science',
        image: 'https://randomuser.me/api/portraits/men/48.jpg'
    },
    {
        name: 'Tanisha',
        age: 11,
        class: 6,
        subject: 'commerce',
        image: 'https://randomuser.me/api/portraits/women/83.jpg'
    },
    {
        name: 'Drasthi',
        age: 10,
        class: 5,
        subject: 'science',
        image: 'https://randomuser.me/api/portraits/women/18.jpg'
    },
    {
        name: 'Kittu',
        age: 9,
        class: 2,
        subject: 'science',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'Harsh Vradhan',
        age: 6,
        class: 'nursery',
        subject: 'hindi',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    }

]



function cvIterator(profiles) {

    let nextIndex = 0;
    return {
        next: function () {

            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

let candidates = cvIterator(data);
nextcv();


let next = document.getElementById('next');
next.addEventListener('click', nextcv);

function nextcv() {
    let currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item disabled " aria-disabled="true"> Name : ${currentCandidate.name}</li>
        <li class="list-group-item disabled" aria-disabled="true"> Age : ${currentCandidate.age}</li>
        <li class="list-group-item disabled" aria-disabled="true"> Class : ${currentCandidate.class}</li>
        <li class="list-group-item disabled" aria-disabled="true"> Subject : ${currentCandidate.subject}</li>
       
      </ul>`
    }
    else {
        console.log('not working');
        alert('End of application');
        window.location.reload();

    }
}