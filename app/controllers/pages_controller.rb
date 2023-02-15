class PagesController < ApplicationController
  include ReactOnRails::Controller

  def index
    render_html
  end

  def render_html
    respond_to do |format|
      format.html
    end
  end
end
