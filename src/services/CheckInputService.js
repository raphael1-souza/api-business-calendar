class CheckInputService {
  checkCountry(country) {
    if (!country) {
      return false;
    }
    const regex = /^[a-z]{3}$/gi;
    const matches_array = country.match(regex);

    return matches_array;
  }

  checkDate(date) {
    if (!date) {
      return false;
    }
    const regex = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/g;
    const matches_array = date.match(regex);

    return matches_array;
  }

  checkListDates(listDates) {
    if (!listDates) {
      return false;
    }

    for (let i = 0; i < listDates.length; i += 1) {
      if (!this.checkDate(listDates[i])) {
        return false;
      }
    }

    return true;
  }
}

export default new CheckInputService();
