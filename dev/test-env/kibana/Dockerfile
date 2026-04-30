FROM docker.elastic.co/kibana/kibana:9.3.2

COPY ./plugins/elastalertKibanaPlugin-9.3.2.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-9.3.2.zip
