import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // use lodash to go to the start index and take all the items for the current page
    // convert the items array to lodash wrapper so we can chain lodash methods, and convert it back to normal using .value() method
    return _(items).slice(startIndex).take(pageSize).value();

}