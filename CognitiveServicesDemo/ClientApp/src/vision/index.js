import React, { Component } from "react";
import qs from "qs";
import { imageSearch } from "../api/bing";
import "./Vision.css";

import { Notification } from "../components/Notification";
import { SearchInput } from "./components/SearchInput";
import { SearchSuggestions } from "./components/SearchSuggestions";
import { SearchResults } from "./components/SearchResults";
import { AnalysedImage } from "./components/AnalysedImage";
import { analyseImage } from "../api/computer-vision";

export class Vision extends Component {
  state = {
    isSearching: false,
    isAnalysing: false,
    searchResults: null,
    selectedImage: null,
    searchText: null,
    originalSearchText: null
  };
  configIsValid = () => {
    const { config: { computerVision, bingSearch } } = this.props;
    return computerVision.key && computerVision.region && bingSearch.key;
  };
  getThumbnailUrl = image => {
    return `${image.thumbnailUrl}&${qs.stringify({ w: 300, h: 300 })}`;
  };
  selectImage = async image => {
    const { config: { computerVision: { key, region } } } = this.props;
    this.setState({
      selectedImage: image,
      isAnalysing: true
    });
    const analysedImageData = await analyseImage(
      key,
      region,
      image.contentUrl,
      {
        visualFeatures: "Categories,Tags,Description,Faces,ImageType,Color",
        details: "Celebrities,Landmarks"
      }
    );
    this.setState({
      selectedImage: image,
      isAnalysing: false,
      analysisData: analysedImageData
    });
  };
  searchImages = async searchText => {
    const { config: { bingSearch } } = this.props;
    if (searchText) {
      this.setState({ isSearching: true, originalSearchText: searchText, selectedImage: null });
      const searchResults = await imageSearch(bingSearch.key, searchText, {
        count: 5
      });
      this.setState({
        isSearching: false,
        searchResults: searchResults,
        searchText: searchResults.searchText
      });
    } else {
      this.setState({
        isSearching: false,
        searchResults: null,
        searchText: null,
        selectedImage: null
      });
    }
  };
  updateSearchTerm = searchQuery => {
    this.setState({ searchQuery });
    this.searchImages(searchQuery);
  };
  render() {
    if (!this.configIsValid()) {
      return (
        <Notification
          type="danger"
          text="Please go to the readme and configure the your user secrets for Computer Vision and Bing Search API"
        />
      );
    }
    const {
      searchText,
      isSearching,
      isAnalysing,
      selectedImage,
      searchResults,
      analysisData
    } = this.state;
    const isSpellCorrected = searchResults && searchResults.spellingCorrected;
    return (
      <div className="vision">
        <header>
          <h1 className="title is-1">Microsoft Computer Vision</h1>
        </header>
        <SearchInput
          type="search"
          searchQuery={this.state.originalSearchText}
          search={this.searchImages}
          isSpellCorrected={isSpellCorrected}
          showingResultsForText={
            isSpellCorrected ? searchResults.searchText : null
          }
        />
        <SearchSuggestions
          search={this.updateSearchTerm}
          suggestions={
            searchResults && searchResults.relatedSearches.length > 0
              ? searchResults.relatedSearches
              : null
          }
        />
        <SearchResults
          selectedImage={selectedImage}
          onImageClick={this.selectImage}
          searchText={searchText}
          searchResults={searchResults ? searchResults.value : null}
          getThumbnailUrl={this.getThumbnailUrl}
          isSearching={isSearching}
        />
        {!isSearching &&
          !selectedImage &&
          searchResults && <p>Click an image to analyse</p>}
        {selectedImage && (
          <AnalysedImage
            selectedImage={selectedImage}
            isAnalysing={isAnalysing}
            data={analysisData}
          />
        )}
      </div>
    );
  }
}
