const baseUrl = 'https://pixabay.com/api/';
const key = '14230040-8f4217119aa6e0fd5b0363ac7';

export default {
  page: 1,
  query: '',
  fetchImages() {
    const requestUrl = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=`;
    return fetch(baseUrl + requestUrl + key)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
