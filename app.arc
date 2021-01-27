@app
notes-workless

@static
fingerprint true

@http
get /
get /login
get /notes
get /notes/:id
post /logout
post /notes
post /notes/delete

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
