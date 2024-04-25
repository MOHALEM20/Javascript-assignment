// Creating elements
const personalInfoDiv = document.createElement('div');
const educationDiv = document.createElement('div');
const skillsDiv = document.createElement('div');

// PERSONAL INFO
const personalInfoHeader = document.createElement('h3');
personalInfoHeader.textContent = 'PERSONAL INFO';
personalInfoDiv.appendChild(personalInfoHeader);

const fullNameLabel = document.createElement('span');
fullNameLabel.textContent = 'FULL NAMES:';
personalInfoDiv.appendChild(fullNameLabel);

const fullNameSpan = document.createElement('span');
fullNameSpan.textContent = 'Tshiamo Mbalinhle Mohale';
personalInfoDiv.appendChild(fullNameSpan);

const ageParagraph = document.createElement('p');
ageParagraph.textContent = 'AGE: 24 (20 JUNE)';
personalInfoDiv.appendChild(ageParagraph);

const genderParagraph = document.createElement('p');
genderParagraph.textContent = 'GENDER: female';
personalInfoDiv.appendChild(genderParagraph);

const ethnicGroupParagraph = document.createElement('p');
ethnicGroupParagraph.textContent = 'ETHNIC GROUP: African';
personalInfoDiv.appendChild(ethnicGroupParagraph);

// EDUCATION
const educationHeader = document.createElement('h3');
educationHeader.textContent = 'EDUCATION';
educationDiv.appendChild(educationHeader);

const marketingManagementSpan = document.createElement('span');
marketingManagementSpan.textContent = 'Marketing Management';
educationDiv.appendChild(marketingManagementSpan);

const marketingManagementN6Span = document.createElement('span');
marketingManagementN6Span.textContent = 'N6';
educationDiv.appendChild(marketingManagementN6Span);

const marketingManagementPeriodParagraph = document.createElement('p');
marketingManagementPeriodParagraph.textContent = '2018-2019';
educationDiv.appendChild(marketingManagementPeriodParagraph);

const iotSpan = document.createElement('span');
iotSpan.textContent = 'IOT(Internet of things)';
educationDiv.appendChild(iotSpan);

const iotPeriodParagraph = document.createElement('p');
iotPeriodParagraph.textContent = '2024';
educationDiv.appendChild(iotPeriodParagraph);

// SKILLS
const skillsHeader = document.createElement('h3');
skillsHeader.textContent = 'SKILLS';
skillsDiv.appendChild(skillsHeader);

const communicationSpan = document.createElement('span');
communicationSpan.textContent = 'Communication';
skillsDiv.appendChild(communicationSpan);

const multitaskingParagraph = document.createElement('p');
multitaskingParagraph.textContent = 'Multitasking';
skillsDiv.appendChild(multitaskingParagraph);

const adaptabilityParagraph = document.createElement('p');
adaptabilityParagraph.textContent = 'Adaptability';
skillsDiv.appendChild(adaptabilityParagraph);

const computerLiteracyParagraph = document.createElement('p');
computerLiteracyParagraph.textContent = 'Computer literate';
skillsDiv.appendChild(computerLiteracyParagraph);

// Appending divs to the document body
document.body.appendChild(personalInfoDiv);
document.body.appendChild(educationDiv);
document.body.appendChild(skillsDiv);
