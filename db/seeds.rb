# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Stock.create!(symbol: 'APPL', name: 'Apple', price: 223.57, currency_change: 0.03, percent_change: 0.01, market: 'nasdaq')
Stock.create!(symbol: 'MSFT', name: 'Microsoft', price: 220.01, currency_change: 0.04, percent_change: 0.02, market: 'nasdaq')
Stock.create!(symbol: 'GOOG', name: 'Google', price: 23.51, currency_change: 0.05, percent_change: 0.03, market: 'nasdaq')
Stock.create!(symbol: 'TWTR', name: 'Twitter', price: 33.22, currency_change: 0.06, percent_change: 0.04, market: 'nasdaq')
Stock.create!(symbol: 'FB', name: 'Facebook', price: 16.55, currency_change: 0.07, percent_change: 0.05, market: 'nasdaq')