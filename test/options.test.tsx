// import { h } from 'preact';
// import { shallow } from 'enzyme';
// import fetchMock from 'jest-fetch-mock';
// import 'regenerator-runtime/runtime';
//
// import GitHubCalendar from '../src/Hint';
// import * as mockContributionData from './__mock__/index.json';
//
// describe('Fully testing API options', () => {
//     fetchMock.mockResponse(JSON.stringify(mockContributionData));
//
//     test('blockMargin', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     blockMargin: 4,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             // Expecting 16 as default block size is 12 + 4 on the new margin (2 by default)
//             expect(wrapper.html()).toContain('<g transform="translate(16, 0)">');
//             done();
//         });
//     });
//
//     test('blockSize', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     blockSize: 14,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.html()).toContain('<rect x="0" y="21" width="14" height="14" fill="#9be9a8"></rect>');
//             done();
//         });
//     });
//
//     test('calendarClassName', (done) => {
//         const mockClassName = 'my-calendar-class-name';
//
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     calendarClassName: mockClassName,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.hasClass(mockClassName)).toBe(true);
//             // expect(wrapper.contains(<div style={{ textAlign: 'center' }}>Unknown Error</div>)).toBe(true);
//             done();
//         });
//     });
//
//     test('contributionColorArray', (done) => {
//         const legendItems = [
//             '<li style="background-color: #ededed">',
//             '<li style="background-color: #62A197">',
//             '<li style="background-color: #428892">',
//             '<li style="background-color: #296887">',
//             '<li style="background-color: #274969">',
//         ];
//
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     contributionColorArray: ['#ededed', '#62A197', '#428892', '#296887', '#274969'],
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             for (const legendItem in legendItems) {
//                 expect(wrapper.html()).toContain(legendItem);
//             }
//             done();
//         });
//     });
//
//     test('contributionCountFontSize', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     contributionCountFontSize: 16,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.html()).toContain(
//                 '<span style="font-weight: 300; line-height: 1.3em; font-size: 16px; display: block;">',
//             );
//             done();
//         });
//     });
//
//     test('fontSize', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     fontSize: 16,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.html()).toContain(
//                 '<div style="padding: 15px 10px; text-align: center; border-top: 1px solid #ddd; font-size: 16px;">',
//             );
//             done();
//         });
//     });
//
//     test('labelColor', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     labelColor: '#f00',
//                     showWeekdaysLabels: true,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.html()).toContain('<text x="0" y="46" style="font-size: 14px; fill: #f00;">Mon</text>');
//             expect(wrapper.html()).toContain('<text x="33.6" y="14" style="font-size: 14px; fill: #f00;">Aug</text>');
//             done();
//         });
//     });
//
//     test('labelFontSize', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     labelFontSize: 16,
//                     showWeekdaysLabels: true,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.html()).toContain('<text x="0" y="49" style="font-size: 16px; fill: #000;">Mon</text>');
//             expect(wrapper.html()).toContain('<text x="33.6" y="16" style="font-size: 16px; fill: #000;">Aug</text>');
//             done();
//         });
//     });
//
//     test('showWeekdaysLabels', (done) => {
//         const wrapper = shallow(
//             <GitHubCalendar
//                 username="ryanchristian4427"
//                 options={{
//                     showWeekdaysLabels: true,
//                 }}
//             />,
//         );
//
//         setImmediate(() => {
//             expect(wrapper.update()).toMatchSnapshot();
//             expect(wrapper.html()).toContain('<text x="0" y="46" style="font-size: 14px; fill: #000;">Mon</text>');
//             done();
//         });
//     });
// });
