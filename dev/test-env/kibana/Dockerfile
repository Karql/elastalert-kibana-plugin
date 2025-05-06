FROM docker.elastic.co/kibana/kibana:9.0.0

COPY ./plugins/elastalertKibanaPlugin-9.0.0.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.0.0.zip
