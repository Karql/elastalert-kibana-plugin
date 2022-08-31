FROM docker.elastic.co/kibana/kibana:8.4.0

COPY ./plugins/elastalertKibanaPlugin-8.4.0.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.4.0.zip
