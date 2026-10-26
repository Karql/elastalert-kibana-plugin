FROM docker.elastic.co/kibana/kibana:9.5.4

COPY ./plugins/elastalertKibanaPlugin-9.5.4.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.5.4.zip
